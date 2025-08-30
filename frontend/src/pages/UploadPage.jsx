import Dropzone from '../forms/UploadDrop';
import './UploadPage.css'

function Upload() {
  return (
    <section className='section'>
      <div className='container'>
        <h1>Upload Video Files Only</h1>
        <Dropzone className='p-16 mt-10 border border-neutral-200 d-flex justify-content-center align-items-center'/>
      </div>
    </section>
  );
}

export default Upload;
