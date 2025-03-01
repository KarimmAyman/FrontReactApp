import "./SuccessMessageStyles.css"; // تغيير اسم ملف CSS لتجنب التداخل

const SuccessMessage = () => {
  return (
    <div className="success-message-container">
      <div className="checkmark-circle">
        <div className="checkmark">✓</div>
      </div>
      <h2 className="success-title">
        Your Advertise has been published successfully.
      </h2>
      <p className="success-subtitle">We Thank you.</p>
    </div>
  );
};

export default SuccessMessage;
