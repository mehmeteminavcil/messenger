const InputError = ({ error }: { error: any }) => {
  return (
    <div className="block w-full bg-red-400 text-center text-sm text-white py-2 rounded-lg">
      {error}
    </div>
  );
};

export default InputError;
