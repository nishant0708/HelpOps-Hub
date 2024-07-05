import React, { useState } from "react";
import Modal from "react-modal";
import "@stylesheets/EditModal.css";
const EditProfileModal = ({
  isOpen,
  onRequestClose,
  profileImg,
  setProfileImg,
  name,
  setName,
  designation,
  setDesignation,
  description,
  setDescription,
  linkedin,
  setLinkedin,
  github,
  setGithub,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Profile">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Image</label>
          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
          <img src={profileImg} alt="Profile Preview" className="profile-img-preview" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Designation</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>LinkedIn Link</label>
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        <div>
          <label>GitHub Link</label>
          <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {password && (
          <div>
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        )}
        <button type="submit">Save</button>
      </form>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default EditProfileModal;
