import { useState, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Card from './components/Card';
import List from './components/List';
import CreateListForm from './components/CreateList';

export default function Index() {
  const [data, setData] = useState({ list: [{ list_title: 'blabla' }] });

  const methods = useForm({
    defaultValues: data,
  });
  const [openCreateListForm, setOpenCreateListForm] = useState(false);

  const onClickOpenCreateListForm = useCallback(() => {
    return setOpenCreateListForm(true);
  }, []);

  const onClickCancelCreateListForm = useCallback(() => {
    return setOpenCreateListForm(false);
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
          <List onSubmit={onSubmit}>{/* <Card /> */}</List>
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
