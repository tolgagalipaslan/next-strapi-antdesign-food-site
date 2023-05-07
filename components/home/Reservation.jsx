import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

const Reservation = () => {
  return (
    <div className="w-full reservationImage p-10 pt-12 ">
      <div className="w-10/12  mx-auto font-bebas flex flex-col gap-7">
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-2xl text-white">RESERVATION</h1>
          <h1 className="text-5xl text-white">BOOK YOUR TABLE</h1>
        </div>
        <Form
          labelCol={{ span: 4 }}
          layout="horizontal "
          className="bg-white/10 p-3 rounded-xl w-full max-w-[1100px] mx-auto"
        >
          <Form.Item>
            <Input placeholder="NAME" className="font-bebas p-2" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="EMAIL" className="font-bebas p-2" />
          </Form.Item>
          <Form.Item className="w-full font-bebas">
            <Select placeholder="PEOPLE" className="font-bebas">
              <Select.Option value="1" className="font-bebas">
                1
              </Select.Option>
              <Select.Option value="2" className="font-bebas">
                2
              </Select.Option>
              <Select.Option value="3" className="font-bebas">
                3
              </Select.Option>
              <Select.Option value="4" className="font-bebas">
                4
              </Select.Option>
              <Select.Option value="4+" className="font-bebas">
                4+
              </Select.Option>
            </Select>
          </Form.Item>

          <div className="flex gap-2 w-full">
            <Form.Item className="w-1/2">
              <DatePicker
                className="w-full font-bebas"
                placeholder="Select Date"
              />
            </Form.Item>
            <Form.Item className="w-1/2">
              <InputNumber
                className="w-full font-bebas"
                placeholder="Type Time"
              />
            </Form.Item>
          </div>

          <Form.Item className="w-full">
            <Button className="w-full text-white bg-red-600 h-fit font-bebas text-2xl border-none">
              FIND A TABLE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Reservation;
