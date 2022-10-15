import CreateListForm from './CreateListForm';

export interface ICreateListProps {
  openCreateListForm?: boolean;
  onClickCancel?: () => void;
  onClickOpen?: () => void;
  onSubmit?: (data: any) => void;
  name?: string;
  defaultValues?: any;
}

const CreateListButton = ({
  openCreateListForm,
  onClickCancel,
  onClickOpen,
  onSubmit,
  defaultValues,
}: ICreateListProps) => {
  return (
    <div className="w-[272px]">
      {openCreateListForm ? (
        <CreateListForm
          onClickCancel={onClickCancel}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        />
      ) : (
        <button
          onClick={onClickOpen}
          className="box-border w-full px-4 py-2 text-left bg-white rounded-sm bg-opacity-30"
        >
          <span className="text-white">+ Add another list</span>
        </button>
      )}
    </div>
  );
};

export default CreateListButton;
