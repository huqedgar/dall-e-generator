import classNames from 'classnames/bind';
import styles from './App.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function App() {
   const [prompt, setPrompt] = useState('');

   const handlePromptOnChange = (e) => {
      setPrompt(e.target.value);
   };

   console.log(prompt);

   const handleGetImage = async () => {
      const options = {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_SECRECT_KEY}`,
            'Content-type': 'application/json'
         },
         body: JSON.stringify({
            prompt: prompt,
            n: 4,
            size: '1024x1024'
         })
      };
      try {
         const response = await fetch('https://api.openai.com/v1/images/generations', options);
         const data = await response.json();
         data?.data.forEach((imageObject) => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('imageContainer');
            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', imageObject.url);
            imageContainer.append(imageElement);
            const imagesSection = document.querySelector('imagesSection');
            imagesSection.append(imageContainer);
         });
      } catch (ex) {}
   };

   return (
      <div className={cx('App')}>
         <header>
            <h1>AI Image Generator</h1>
         </header>
         <section className={cx('imagesSection')}></section>
         <section className={cx('bottomSection')}>
            <div className={cx('inputContainer')}>
               <input id='prompt' name='prompt' value={prompt} onChange={handlePromptOnChange} />
               <div id='submit-icon' className={cx('divIconSubmit')} onClick={handleGetImage}>
                  &#10146;
               </div>
            </div>
         </section>
      </div>
   );
}

export default App;
