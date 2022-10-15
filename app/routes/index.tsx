import { useState, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import List from './components/List';
import CreateListForm from './components/CreateList';

export default function Index() {
  const [openCreateListForm, setOpenCreateListForm] = useState(false);
  const [openCreateLCardForm, setOpenCreateCardForm] = useState(false);
  const [data, setData] = useState({
    list: [{ list_title: 'blabla', card: [{ description: '' }] }],
  });

  const methods = useForm({
    defaultValues: data,
  });

  const onClickOpenCreateListForm = useCallback(() => {
    return setOpenCreateListForm(true);
  }, []);

  const onClickCancelCreateListForm = useCallback(() => {
    return setOpenCreateListForm(false);
  }, []);

  const onClickOpenCreateCardForm = useCallback(() => {
    return setOpenCreateCardForm(true);
  }, []);

  const onClickCancelCreateCardForm = useCallback(() => {
    return setOpenCreateCardForm(false);
  }, []);

  const onSubmit = (formData: any) => {
    console.log(formData);
    methods.reset({ ...data, ...formData });
    setData(formData);
    setOpenCreateListForm(false);
  };

  return (
    <div className="box-border w-full h-auto p-5">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex items-start"
        >
          <List
            onSubmit={onSubmit}
            onClickOpen={onClickOpenCreateCardForm}
            onClickCancel={onClickCancelCreateCardForm}
            openCreateLCardForm={openCreateLCardForm}
          />
          <CreateListForm
            onClickCancel={onClickCancelCreateListForm}
            onClickOpen={onClickOpenCreateListForm}
            openCreateListForm={openCreateListForm}
            onSubmit={onSubmit}
            data={data ?? []}
          />
        </form>
      </FormProvider>
    </div>
  );
}
