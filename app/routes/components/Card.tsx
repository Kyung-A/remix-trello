import { useFormContext, useFieldArray } from 'react-hook-form';

export interface ICardProps {
  onClickCancel: () => void;
  onClickOpen: () => void;
  openCreateLCardForm: boolean;
  nestIndex: number;
}

const Card = ({
  onClickCancel,
  onClickOpen,
  openCreateLCardForm,
  nestIndex,
}: ICardProps) =>
  {
    const { register, control } = useFormContext();

    const { fields } = useFieldArray({
      control,
      name: `list[${nestIndex}].card`,
    });

    return (
      <>
        {fields.map((field, idx) => {
          return (
            <li className="mb-3" key={field.id}>
              {openCreateLCardForm ? (
                <>
                  <textarea
                    {...register(`list[${nestIndex}].card[${idx}].description`)}
                    placeholder="내용을 입력해주세요."
                    className="box-border w-full h-24 px-2 py-1 mb-1 shadow-md resize-none"
                  ></textarea>
                  <div className="flex items-center">
                    <button
                      type="submit"
                      className="px-3 py-2 text-sm text-white rounded-sm bg-sky-600"
                    >
                      Add card
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
                </>
              ) : (
                <div className="box-border relative p-2 bg-white rounded-sm">
                  <p className="w-full break-all">블라블라</p>
                  <button
                    onClick={onClickOpen}
                    type="button"
                    className="absolute right-2 top-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-neutral-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </>
    );
  };

export default Card;
