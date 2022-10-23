import { useFieldArray, useFormContext } from 'react-hook-form';

import Card from './Card';

export interface IListProps {
  onSubmit: (data: any) => void;
  data: any;
}

const List = ({ onSubmit, data }: IListProps) => {
  const { register, control, setValue, watch, handleSubmit } = useFormContext();

  const { fields, update } = useFieldArray({
    control,
    name: 'list',
  });

  return (
    <>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="w-[272px] p-2 bg-gray-200 rounded-sm box-border mr-3 last:mr-0"
        >
          <div className="flex items-center w-full mb-3">
            <input
              {...register(`list.${index}.list_title`)}
              onBlur={() => {
                setValue(
                  `list.${index}.list_title`,
                  watch(`list.${index}.list_title`),
                  { shouldValidate: true, shouldDirty: true }
                );
                update(index, {
                  list_title: watch(`list.${index}.list_title`),
                });
                handleSubmit((data) => onSubmit(data))();
              }}
              type="text"
              className="box-border w-full px-2 py-1 text-black bg-gray-200 focus:bg-transparent focus:bg-white focus:outline-sky-600"
            />
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-neutral-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>
          </div>
          <Card nestIndex={index} data={data} onSubmit={onSubmit} />
        </div>
      ))}
    </>
  );
};

export default List;
