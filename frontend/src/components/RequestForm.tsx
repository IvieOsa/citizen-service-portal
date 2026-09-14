import { useState, type FormEvent} from 'react';

interface serviceRequestForm {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function RequestForm() {
  const [formData, setFormData] = useState<serviceRequestForm>({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setError(null);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`);
    }

    setSubmitted(true);
  } catch (err) {
    console.error(err);
    setError('Something went wrong submitting your request. Please try again.');
  }
};

  if (submitted) {
    return <div className="alert alert-success mt-4"> Thank you for your submission! </div>;
  }
  return(
    <form onSubmit={handleSubmit} className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2 className="mb-3">Submit a Service Request</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select a category..</option>
          <option value="pothole">Pothole</option>
          <option value="noise">Noise Complaint</option>
          <option value="records">Records Request</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea
          id="description"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit request
      </button>
    </form>
  );
}