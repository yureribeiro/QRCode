import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { useState } from 'react'
import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin:  3,
      color: 155-0-0,
      bgcolor:  '0000ff'
    }, function (err, url){
      setQrcodeLink(url)
    })
  }

  function handleQRcode(a) {
    setLink(a.target.value)
    handleGenerate(a.target.value)
  }

  return (
    <div className='app'>  
      <div className='qrcode'>
        <QRCode
          value={link}
        />
        <input 
          type='text'
          placeholder='digite seu link'
          className='input'
          value={link}
          onChange={(a) => handleQRcode(a)}
        />
          <a href={qrcodeLink} 
          className={`
          ${qrcodeLink ? `block` : `none`}
          `}
          download={`qrcode.png`}
          >Baixar QrCode</a>
      </div> 

      <p className='credit'>Desenvolvido por Yure Ribeiro</p>
    </div>
  );
}

export default App;
