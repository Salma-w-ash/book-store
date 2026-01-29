
import React from 'react'
import {Formik, Form, Field } from 'react-router-dom'

export default function ContactForm() {
  return (
    <div>
      <Formik>
        <Form>
          <div className='flex justify-center gap-2'>
            <Field></Field>
            <Field></Field>
          </div>
          <Field></Field>
          <button type='submit'></button>
        </Form>
      </Formik>
    </div>
  );
}
