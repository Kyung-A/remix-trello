import { useFormContext } from 'react-hook-form';

import type { ICreateListProps } from './CreateList';

const CreateListForm = ({
  onClickCancel,
  onSubmit,
  defaultValues,
}: ICreateListProps) => {
  const { register } = useFormContext();

  return (
    <div className="w-full p-2 bg-gray-200 rounded-sm">
      <input
        {...register(`list.${defaultValues?.list?.length}.list_title`)}
        type="text"
        className="w-full px-2 py-1 mb-2 border-2 rounded-sm border-sky-600 focus:outline-none placeholder:text-sm"
        placeholder="Enter list title..."
        autoFocus
      />
      <div className="flex items-center">
        <button
          type="submit"
          onSubmit={onSubmit}
          className="px-3 py-2 text-sm text-white rounded-sm bg-sky-600"
        >
          Add list
        </button>
        <button
          onClick={onClickCancel}
          type="button"
          className="box-border px-1 ml-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-neutral-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreateListForm;
