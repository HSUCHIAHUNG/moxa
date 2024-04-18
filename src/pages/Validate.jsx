import { Form, Input, Button } from "@arco-design/web-react";
const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      autoComplete="off"
      style={{
        width: 600,
      }}
    >
      <FormItem
        label="Username"
        field="name"
        required
        hasFeedback
        rules={[
          {
            validator: async (value, callback) => {
              return new Promise((resolve) => {
                if (value !== "admin") {
                  callback("Name must be admin");
                  resolve();
                } else {
                  resolve();
                }
              });
            },
          },
        ]}
      >
        <Input placeholder="please enter your username" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 24 }}>
          Submit
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default App;
