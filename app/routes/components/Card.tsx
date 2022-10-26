import { useRef, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import CreateCardFrom from './CreateCardForm';

export interface ICardProps {
  nestIndex: number;
  data: any;
  onSubmit: (data: any) => void;
}

const Card = ({ nestIndex, data, onSubmit }: ICardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { control, setValue, watch, handleSubmit } = useFormContext();

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setValue(`${wrapperRef.current.id}.opened`, false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setValue, wrapperRef]);

  return (
    <>
      <ul>
        {data?.list[nestIndex]?.card?.map((_: any, index: number) => (
          <li key={`card-${index + 1}`} className="mb-3">
            <Controller
              control={control}
              name={`list[${nestIndex}].card[${index}].description`}
              render={({ field: { value, onChange } }) => (
                <>
                  {!watch(`list[${nestIndex}].card[${index}].opened`) ? (
                    <div className="box-border relative p-2 bg-white rounded-sm">
                      <p className="w-full break-all">{value}</p>
                      <button
                        onClick={() => {
                          setValue(
                            `list[${nestIndex}].card[${index}].opened`,
                            true
                          );
                        }}
                        type="button"
                        className="absolute p-2 rounded top-1 right-1 hover:bg-neutral-100 hover:text-neutral-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-neutral-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div
                      ref={wrapperRef}
                      id={`list[${nestIndex}].card[${index}]`}
                    >
                      <textarea
                        defaultValue={value}
                        onChange={onChange}
                        placeholder="내용을 입력해주세요."
                        className="box-border w-full h-24 px-2 py-1 mb-1 shadow-md resize-none"
                        autoFocus
                      ></textarea>
                      <div className="flex items-center">
                        <button
                          type="submit"
                          onClick={() => {
                            setValue(
                              `list[${nestIndex}].card[${index}].opened`,
                              false
                            );
                            handleSubmit((data) => onSubmit(data))();
                          }}
                          className="px-3 py-2 text-sm text-white rounded-sm bg-sky-600"
                        >
                          Add card
                        </button>
                        <button
                          onClick={() => {
                            setValue(
                              `list[${nestIndex}].card[${index}].opened`,
                              false
                            );
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
                </>
              )}
            />
          </li>
        ))}
      </ul>
      <CreateCardFrom nestIndex={nestIndex} data={data} onSubmit={onSubmit} />
    </>
  );
};

export default Card;
