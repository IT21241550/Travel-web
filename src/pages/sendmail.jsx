import React from "react";

const sendmail = () => {
  const handleSendMail = () => {
    // Replace the details with your recipient, subject, and body
    const recipient = "example@mail.com";
    const subject = "Inquiry About Tour Package";
    const body = "Hello,\n\nI would like to know more about your packages.\n\nThank you.";

    // Open the default mail client with pre-filled values
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={handleSendMail}
      >
        Send Email
      </button>
    </div>
  );
};

export default sendmail;
