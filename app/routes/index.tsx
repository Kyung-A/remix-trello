import { useState, useCallback, useMemo, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Card from './components/Card';
import List from './components/List';
import CreateListForm from './components/CreateList';

export default function Index() {
  const defaultValues = useMemo(() => {
    return { list: [{ list_title: 'blabla' }] };
  }, []);

  const methods = useForm({
    defaultValues,
  });
  const [openCreateListForm, setOpenCreateListForm] = useState(false);

  const onClickOpenCreateListForm = useCallback(() => {
    return setOpenCreateListForm(true);
  }, []);

  const onClickCancelCreateListForm = useCallback(() => {
    return setOpenCreateListForm(false);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    methods.reset({ ...defaultValues, ...data });
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
            defaultValues={defaultValues}
          />
        </form>
      </FormProvider>
    </div>
  );
}
