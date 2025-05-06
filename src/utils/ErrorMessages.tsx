function ErrorMessages({ showErrors, hasEmptyTodos, hasEmptyDetailedTodos, hasDuplicateTodos }: { showErrors: boolean; hasEmptyTodos: () => boolean; hasEmptyDetailedTodos: () => boolean, hasDuplicateTodos: () => boolean }) {
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
      {hasDuplicateTodos() && (
        <h2 className="text-red-500 font-bold mt-2">
          TODO LIST has duplicate values
        </h2>
      )}
    </>
  );
}

export default ErrorMessages;