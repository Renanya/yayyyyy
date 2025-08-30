import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { ImCross } from 'react-icons/im';
import axios from '../../api/axios.js';
import './Dropzone.css';

const fileKey = (f) => `${f.name}_${f.size}_${f.lastModified ?? ''}`;

function Dropzone({ className }) {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((prev) => {
        const existingKeys = new Set(prev.map(fileKey));
        const newOnes = acceptedFiles
          .filter((f) => !existingKeys.has(fileKey(f)))
          .map((f) => Object.assign(f, { preview: URL.createObjectURL(f) }));
        return [...prev, ...newOnes];
      });
    }
    if (rejectedFiles?.length) {
      setRejected((prev) => [...prev, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    multiple: true,
  });

  const removeFile = (name) => setFiles((fs) => fs.filter((f) => f.name !== name));
  const removeRejected = (name) => setRejected((rs) => rs.filter(({ file }) => file.name !== name));
  const removeAll = () => {
    files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    setFiles([]);
    setRejected([]);
  };

  // Revoke object URLs on unmount to avoid leaks
  useEffect(() => {
    return () => files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files?.length) return alert('No files uploaded');

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    try {
      const res = await axios.post('upload', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 0,
      });

      if (res.status === 201 || res.status === 200) {
        removeAll();
        alert('Successful Upload');
      } else {
        alert(`Unexpected status: ${res.status}`);
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data ||
        err?.message ||
        'Upload failed';
      alert(`Error: ${msg}`);
      // console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dropzone-form">
      <div
        {...getRootProps({
          className,
          style: { borderWidth: '4px', height: '400px', borderRadius: '20px' },
        })}
      >
        <input {...getInputProps()} />
        <div>
          <ArrowUpTrayIcon />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      <section className="below-dropzone">
        <div className="dropzone-buttons">
          <button type="button" onClick={removeAll} className="remove-button">
            Remove all files
          </button>
          <button type="submit" className="upload-button">
            Upload Files
          </button>
        </div>

        <h3 className="accepted-title">Accepted Files</h3>
        <ul className="accepted-list">
          {files.map((file) => (
            <li key={fileKey(file)} className="accepted-card">
              <button
                type="button"
                className="x-button"
                onClick={() => removeFile(file.name)}
              >
                <ImCross className="text-danger" style={{ fontSize: '16px' }} />
              </button>
              <p>{file.name}</p>
            </li>
          ))}
        </ul>

        <h3 className="rejected-title">Rejected Files</h3>
        <ul className="reject-list">
          {rejected.map(({ file, errors }) => (
            <li key={fileKey(file)} className="">
              <button
                type="button"
                className="x-button"
                onClick={() => removeRejected(file.name)}
              >
                <ImCross className="text-danger" style={{ fontSize: '16px' }} />
              </button>
              <div>
                <p>{file.name}</p>
                <ul>
                  {errors.map((err) => (
                    <li key={err.code}>{err.message}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
}

export default Dropzone;
