import { useState, useRef } from 'react';
import Header from '../../shared/Header/Header';
import './PostBlog.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTIONG_TOKEN;
const hostingUrl = import.meta.env.VITE_HOSTING_URL
const PostBlog = () => {
  const [, setSelectedText] = useState('');
  const contentEditableRef = useRef(null);
  const navigate = useNavigate();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const applyStyle = (style) => {
    document.execCommand(style, false, null);
    contentEditableRef.current.focus();
  };

  const handleTextSelection = () => {
    // const text = window.getSelection().toString();

    // setSelectedText(text);
    setSelectedText(null);


  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'b') {
      event.preventDefault();
      applyStyle('bold');
    } else if (event.ctrlKey && event.key === 'i') {
      event.preventDefault();
      applyStyle('italic');
    }
  };
  const applyBoldStyle = () => {
    applyStyle('bold');
  };

  const applyItalicStyle = () => {
    applyStyle('italic');
  };

  const handlePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const heading = form.heading.value;
    const description = contentEditableRef.current.innerHTML; // Use innerHTML to preserve the applied styles
    const imageFile = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData?.success) {
          const imgUrl = imgData.data.display_url;
          const postBody = { heading, description, image: imgUrl };
          fetch(`${hostingUrl}/blog`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(postBody)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'You post a new blog',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate("/blogs")
              }
            })
        }
      })
  };


  return (
    <>
      <div className="bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary">
        <Header />
      </div>
      <div>
      </div>
      <div className="hero min-h-screen bg-base-200 inner-container">
        <form onSubmit={handlePost} className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Heading"
                name="heading"
                className="input input-bordered text-xl font-bold placeholder:font-normal"
              />
            </div>
            <div className="form-control">
              <div
                ref={contentEditableRef}
                contentEditable="true"
                onKeyUp={handleTextSelection}
                onKeyDown={handleKeyDown}
                data-placeholder="Post Body"
                name="body"
                className="textarea textarea-bordered textarea-lg w-full text-xl"
              ></div>
              <div className='space-x-2 my-3'>
                <button className='border-2 p-1 rounded-md w-8 h-8 border-slate-300 font-bold hover:bg-slate-300' onClick={applyBoldStyle}>B</button>
                <button className='border-2 p-1 rounded-md w-8 h-8 border-slate-300 font-bold hover:bg-slate-300' onClick={applyItalicStyle}>I</button>
              </div>
            </div>
            <div className="form-control">
              <input type="file" name='photo' className="file-input w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostBlog;
