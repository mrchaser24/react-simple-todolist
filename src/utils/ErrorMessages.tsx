function ErrorMessages({ showErrors, hasEmptyTodos, hasEmptyDetailedTodos }: { showErrors: boolean; hasEmptyTodos: () => boolean; hasEmptyDetailedTodos: () => boolean }) {
  if (!showErrors) return null;

  return (
    <>
      {hasEmptyTodos() && (
        <h2 className="text-red-500 font-bold mt-4">
          TODO LIST has empty values
        </h2>
      )}
      {hasEmptyDetailedTodos() && (
        <h2 className="text-red-500 font-bold mt-2">
          TODO LIST with Description has empty values
        </h2>
      )}
    </>
  );
}

export default ErrorMessages;