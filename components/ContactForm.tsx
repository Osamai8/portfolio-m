"use client";

import { useActionState, useEffect } from 'react';
import { Form } from '@/components/form/Form';
import { Input } from '@/components/ui/input';
import { FieldError } from '@/components/form/FieldError';
import { Textarea } from '@/components/ui/textarea';
import { sendMesasge } from '@/features/home/actions/sendMessage';
import { SubmitButton } from './form/SubmitButton';
import { EMPTY_ACTION_STATE } from './form/utils/to-action-state';
import { toast } from 'sonner';

export default function ContactForm() {
  const [actionState, action] = useActionState(sendMesasge, EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState}>
      <label className="mb-px text-[17px] font-medium" htmlFor="name">Reach out:</label>

      <Input id="name" type="text" name="name" placeholder='Your name'
        defaultValue={actionState.payload?.get('name') as string}
      />
      <FieldError actionState={actionState} name="name" />

      <Input id="email" type="text" name="email" placeholder='Your email address'
        defaultValue={actionState.payload?.get('email') as string}
      />
      <FieldError actionState={actionState} name="email" />

      <Textarea
        id="message" name="message" placeholder='Mesasge'
        defaultValue={actionState.payload?.get('message') as string}
        rows={4}
      />
      <FieldError actionState={actionState} name="message" />

      <SubmitButton label='Send Message' />
    </Form>
  );
}
