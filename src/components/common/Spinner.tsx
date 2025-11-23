const Spinner = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={`animate-spin inline-block ${className}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
      <path className="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor"></path>
    </svg>
  );
};

export default Spinner;
