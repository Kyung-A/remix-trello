import { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import _ from 'lodash';

import type { ICardProps } from './Card';

const CreateCardFrom = ({ nestIndex, data, onSubmit }: ICardProps) => {
  const [opened, setOpen] = useState(false);

  const { register, control, handleSubmit } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: `list[${nestIndex}].card`,
  });

  return (
    <>
      {opened && (
        <div className="mb-3">
          <textarea
            {...register(
              `list[${nestIndex}].card[${
                _.isEmpty(data.list[nestIndex].card)
                  ? 0
                  : data?.list[nestIndex]?.card?.length
              }].description`
            )}
            placeholder="내용을 입력해주세요."
            required
            className="box-border w-full h-24 px-2 py-1 mb-1 shadow-md resize-none"
            autoFocus
          ></textarea>
          <div className="flex items-center">
            <button
              type="submit"
              onSubmit={() => {
                handleSubmit((data) => onSubmit(data))();
                setOpen(false);
              }}
              className="px-3 py-2 text-sm text-white rounded-sm bg-sky-600"
            >
              Add card
            </button>
            <button
              onClick={() => {
                remove(data.list[nestIndex].card.length);
                setOpen(false);
              }}
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
      )}

      {!opened && (
        <button
          onClick={() => {
            setOpen(true);
            append({ description: '', opened: false });
          }}
          type="button"
          className="box-border flex items-center w-full p-1 rounded-sm hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-neutral-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span className="pl-1 text-sm text-neutral-600">Add a card</span>
        </button>
      )}
    </>
  );
};

export default CreateCardFrom;
