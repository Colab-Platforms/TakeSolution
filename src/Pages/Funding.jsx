import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import SectionTitle from "../Components/Common/SectionTitle";
import loadBackgroudImages from "../Components/Common/loadBackgroudImages";
import { CheckCircle, DollarSign, PieChart, TrendingUp, ShieldCheck, Mail } from "lucide-react";

const Funding = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        descriptions: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Fetch from .env file 
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


        if (serviceID === 'YOUR_SERVICE_ID' || !serviceID) {
            console.error('EmailJS is not configured.');
            setStatus('Error: Email service not configured.');
            return;
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                message: formData.descriptions,
                to_name: 'TakeSolution Admin',
            };

            await emailjs.send(serviceID, templateID, templateParams, publicKey);

            console.log("Email sent successfully!");
            setStatus('Inquiry sent successfully! Our team will contact you soon.');
            setFormData({ name: '', email: '', phone: '', descriptions: '' });
        } catch (error) {
            console.error("FAILED to send message:", error);
            setStatus('Oops! Something went wrong. Please try again later.');
        }
    };

    const fundingBenefits = [
        { icon: <TrendingUp className="text-primary" />, title: "Scale Your Business", desc: "Access the capital you need to reach your next milestone with flexible terms." },
        { icon: <ShieldCheck className="text-primary" />, title: "Secure Investment", desc: "Transparent funding processes with clear guidelines and trusted partners." },
        { icon: <PieChart className="text-primary" />, title: "Strategic Advisory", desc: "We don't just provide capital; we provide expertise to help you grow sustainably." },
        { icon: <DollarSign className="text-primary" />, title: "Flexible Capital", desc: "From seed funding to late-stage expansion capital, we offer solutions for every stage." },
    ];

    const steps = [
        { number: "01", title: "Submit Request", desc: "Fill out the funding form with your project details and capital requirements." },
        { number: "02", title: "Initial Review", desc: "Our team evaluates your business model and potential for growth." },
        { number: "03", title: "Due Diligence", desc: "We present a customized funding solution tailored to your specific needs." },
        { number: "04", title: "Investment", desc: "Once finalized, funds are disbursed and our partnership begins." },
    ];

    return (
        <div className="funding-page" style={{ background: '#f8f9fa' }}>
            {/* <BreadCumb Title="Funding Solutions"></BreadCumb> */}

            {/* Hero & Intro Section */}
            <div className="funding-intro-section pt-100 pb-100 overflow-hidden" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title text-left mb-4">
                                <SectionTitle
                                    SubTitle="EMPOWERING VENTURES"
                                    Title="Capital to Fuel Your<br> <span>Innovation & Growth.</span>"
                                ></SectionTitle>
                                <p className="mt-4 fs-5" style={{ color: '#555' }}>
                                    At TakeSolution, we believe in the power of visionary entrepreneurship.
                                    Our funding solutions are designed to support companies at every stage of their journey,
                                    from groundbreaking startups to established enterprises looking to expand globally.
                                </p>
                                <div className="row mt-5">
                                    {fundingBenefits.map((benefit, index) => (
                                        <div key={index} className="col-md-6 mb-4">
                                            <div className="d-flex align-items-start gap-2 justify-content-center benefit-box">
                                                <div className="icon-wrap ml-3 p-2 mt-2 rounded" style={{ background: 'rgba(34, 133, 163, 0.1)' }}>
                                                    {benefit.icon}
                                                </div>
                                                <div>
                                                    <h5 className="mb-1" style={{ fontSize: '1.1rem' }}>{benefit.title}</h5>
                                                    <p className="small mb-0" style={{ color: '#777' }}>{benefit.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="funding-form-card bg-white p-5 rounded-5 mt-10 shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}>
                                <div className="form-header mb-4">
                                    <h3 className="mb-2" style={{ fontSize: '1.75rem', fontWeight: 700 }}>Quick Inquiry</h3>
                                    <p className="text-muted small">Fill out the form below to discuss your funding needs with our investment team.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="funding-inquiry-form">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label text-dark small fw-bold mb-1">Name of the Company *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control p-3 bg-light border-0 rounded-3"
                                                placeholder="Enter your Company name..."
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-dark small fw-bold mb-1">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control p-3 bg-light border-0 rounded-3"
                                                placeholder="Enter your email..."
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-dark small fw-bold mb-1">Phone Number *</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control p-3 bg-light border-0 rounded-3"
                                                placeholder="Enter your phone number..."
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label text-dark small fw-bold mb-1">Descriptions *</label>
                                            <textarea
                                                name="descriptions"
                                                className="form-control p-3 bg-light border-0 rounded-3 w-100"
                                                placeholder="Enter your descriptions"
                                                required
                                                value={formData.descriptions}
                                                onChange={handleChange}
                                                rows="4"
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary w-100 p-3 fw-bold rounded-3 shadow-sm border-0" style={{ background: 'linear-gradient(90deg, #2285A3, #4fc1f0)' }}>
                                                {status === 'Sending...' ? 'SUBMITTING...' : 'REQUEST INQUIRY'}
                                            </button>
                                            {status && <div className={`mt-2 text-center small ${status.includes('success') ? 'text-success' : 'text-info'}`}>{status}</div>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="funding-process-section py-5" style={{ background: '#f8f9fa' }}>
                <div className="container py-4">
                    <div className="section-title text-center mb-60">
                        <SectionTitle
                            SubTitle="OUR PROCESS"
                            Title="Simple Steps to Get Funded"
                        ></SectionTitle>
                    </div>
                    <div className="row">
                        {steps.map((step, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="step-card p-4 h-100 rounded-3 text-center transition-all hover-up bg-white shadow-sm border border-transparent hover:border-primary">
                                    <div className="step-number h1 mb-3 opacity-10" style={{ fontWeight: 800, color: '#2285A3' }}>{step.number}</div>
                                    <h4 className="mb-3">{step.title}</h4>
                                    <p className="small text-muted mb-0">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
                .funding-page { background-color: #f8f9fa !important; }
                .benefit-box { transition: all 0.3s ease; }
                .benefit-box:hover { transform: translateX(5px); }
                .step-card { transition: all 0.3s ease; }
                .step-card:hover { transform: translateY(-10px); border-color: #2285A3 !important; }
                .hover-up:hover { transform: translateY(-5px); }
                .bg-white-10 { background: rgba(255,255,255,0.1); }
                .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
                .form-control:focus, .form-select:focus { 
                    background: #fff !important; 
                    box-shadow: 0 0 0 3px rgba(34, 133, 163, 0.1) !important;
                    border: 1px solid #2285A3 !important;
                }
                `}
            </style>
        </div>
    );
};

export default Funding;
