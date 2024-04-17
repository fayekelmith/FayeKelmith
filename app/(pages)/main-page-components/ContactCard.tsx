"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const formSchema = z.object({
  content: z
    .string({ required_error: "What would like me to know" })
    .min(2, { message: "Please send a longer message" }),
  sender: z.string().optional(),
  contact: z.string().optional(),
});

const ContactCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post("/api/messages", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-16">
        <FormField
          control={form.control}
          name="sender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name/Nickname..." {...field} />
              </FormControl>
              <FormDescription>
                You can use a nickname if you wish to remain anonymous
              </FormDescription>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message..." {...field} />
              </FormControl>

              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Textarea placeholder="Contact/mail (Optional)" {...field} />
              </FormControl>
              <FormDescription>
                Please leave a contact if you wish to get a response
              </FormDescription>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
};

export default ContactCard;
