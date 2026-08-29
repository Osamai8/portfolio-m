"use client";

import { useActionState } from 'react';
import { Form } from '@/components/form/Form';
import { Input } from '@/components/ui/input';
import { FieldError } from '@/components/form/FieldError';
import { Textarea } from '@/components/ui/textarea';
import { sendMesasge } from '@/features/home/actions/sendMessage';
import { SubmitButton } from './form/SubmitButton';

export default function ContactForm() {
  const [actionState, action] = useActionState(sendMesasge, {
    message: "",
    fieldErrors: {},
    timestamp: Date.now()
  });

  return (
    <Form action={action} actionState={actionState}>
      <label className="mb-px text-[17px] font-medium" htmlFor="name">Reach out:</label>

      <Input id="name" type="text" name="name"
        placeholder='Your name'
        // className="block w-full resize-y rounded-[7px] border border-[#363636] bg-[#242424] px-3.5 py-4.25 text-base text-[#f1f1f1] outline-none transition-colors duration-200 placeholder:text-[#999] focus:border-[#666] focus:bg-[#292929]"
        defaultValue={actionState.payload?.get('name') as string}
      />
      <FieldError actionState={actionState} name="name" />

      <Input id="email" type="text" name="email"
        placeholder='Your email address'
        defaultValue={actionState.payload?.get('email') as string}
      />
      <FieldError actionState={actionState} name="email" />

      <Textarea
        id="message" name="message"
        placeholder='Mesasge'
        defaultValue={actionState.payload?.get('message') as string}
        className='h-0'
        rows={4}
      />
      <FieldError actionState={actionState} name="message" />

      <SubmitButton label='Send Message' />
    </Form>
  );
}
