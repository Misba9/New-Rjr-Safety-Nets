import { useForm } from 'react-hook-form';
import Button from '../common/Button';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Simulate async submission (replace with real API call)
    await new Promise((res) => setTimeout(res, 900));
    alert('Thank you for your message! We will get back to you shortly.');
  };

  const inputStyles = "w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-brand-light-gray border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary transition text-sm sm:text-base";
  const errorStyles = "text-red-500 text-xs sm:text-sm mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div>
        <input 
          {...register('name', { required: 'Name is required' })}
          placeholder="Your Name"
          className={inputStyles}
        />
        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
      </div>
      <div>
        <input 
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Your Email"
          className={inputStyles}
        />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>
      <div>
        <input 
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="Your Phone Number"
          className={inputStyles}
        />
        {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
      </div>
      <div>
        <textarea 
          {...register('message', { required: 'Message is required' })}
          placeholder="Your Message"
          rows={4}
          className={inputStyles}
        />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full text-sm sm:text-base" loading={isSubmitting}>Send Message</Button>
    </form>
  );
};

export default ContactForm;