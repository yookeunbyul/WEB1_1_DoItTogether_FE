interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className='text-main font-caption'>{message}</p>;
};

export default ErrorMessage;
