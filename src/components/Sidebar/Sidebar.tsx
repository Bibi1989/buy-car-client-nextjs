import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Menu, Select } from "antd";
import { useRouter } from "next/router";
import { formatPrice } from "../../utils/formatPrice";
import {
  RadarChartOutlined,
  QqOutlined,
  DollarOutlined,
  KeyOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Option }: any = Select;

const Sidebar = ({ setSelect, select, makes, models, total, nTotal }) => {
  const [mod, setMod] = useState<any>(null);
  const { query, push }: { query: any; push: any } = useRouter();
  const prices = [
    500000,
    1000000,
    1500000,
    2000000,
    2500000,
    3000000,
    10000000,
    20000000,
    30000000,
    40000000,
    50000000,
  ];

  useEffect(() => {
    const getModels = async () => {
      const res = await fetch(
        `https://buyyourcar-api.herokuapp.com/api/v1/models/${select.make}`
      );
      let mods = await res.json();
      // let k: any = new Set(mods.data ? mods.data.map((m) => m) : []);
      // let n = [...k];
      setMod(mods);
    };
    getModels();
  }, [select]);

  let newModels = mod ? mod : models;
  // console.log(models);

  const handleSearch = () => {
    push({
      pathname: "/",
      query: select,
    });
  };
  const handleClick = () => {
    // push({
    //   pathname: "/",
    //   query: select,
    // });
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Container>
      <Button
        loading={false}
        type='primary'
        shape='round'
        icon={<KeyOutlined />}
        size='large'
        style={{ width: "100%", marginTop: "2em" }}
        onClick={() => push("/")}
      >
        All Cars ({total})
      </Button>
      <Menu style={{ width: "100%" }} mode='inline'>
        <SubMenu
          key='sub1'
          title={
            <span>
              <QqOutlined />
              <span>Car Makes</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              onChange={(value) =>
                setSelect({
                  ...select,
                  make: value,
                })
              }
              defaultValue='Car Makes'
              style={{ width: "100%" }}
              // onChange={handleChange}
            >
              <Option value={query.make}>
                {query.make || " Select a make"}
              </Option>
              {makes.map((make: any) => (
                <Option key={make.make} value={make.make}>
                  {make.make} ({make.count})
                </Option>
              ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub2'
          title={
            <span>
              <RadarChartOutlined />
              <span>Car Models</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              onChange={(value) =>
                setSelect({
                  ...select,
                  model: value,
                })
              }
              defaultValue='Car Model'
              style={{ width: "100%" }}
            >
              <Option value={query.model}>
                {query.model || " Select a model"}
              </Option>
              {newModels.data &&
                newModels.data.map((model: any) => (
                  <Option key={model.model} value={model.model}>
                    {model.model} ({model.count})
                  </Option>
                ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub3'
          title={
            <span>
              <DollarOutlined />
              <span>Minimum Price</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              onChange={(value) =>
                setSelect({
                  ...select,
                  min: value,
                })
              }
              defaultValue='Car Minimum Price'
              style={{ width: "100%" }}
            >
              <Option value={query.min}>{query.min || "Minimum Prices"}</Option>
              {prices.map((price: number) => (
                <Option key={price} value={price}>
                  {formatPrice(price)}
                </Option>
              ))}
            </Select>
          </div>
        </SubMenu>
        <SubMenu
          key='sub4'
          title={
            <span>
              <DollarOutlined />
              <span>Maximum Price</span>
            </span>
          }
        >
          <div style={{ padding: "1em", paddingLeft: "2em" }}>
            <Select
              onChange={(value) =>
                setSelect({
                  ...select,
                  max: value,
                })
              }
              defaultValue='Car Maximum Price'
              style={{ width: "100%" }}
            >
              <Option value={query.max}>{query.max || "Maximum Prices"}</Option>
              {prices.map((price: number) => (
                <Option key={price} value={price}>
                  {formatPrice(price)}
                </Option>
              ))}
            </Select>
          </div>
        </SubMenu>
      </Menu>
      <Button
        loading={false}
        type='primary'
        shape='round'
        icon={<KeyOutlined />}
        size='large'
        style={{ width: "100%", marginTop: "2em" }}
        onClick={handleSearch}
      >
        Search For Car
      </Button>

      <p className='count'>{nTotal} Cars Found!!!</p>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
  border-radius: 0.3em;

  h2 {
    padding: 1em 0;
    padding-top: 0;
  }
`;
const List = styled.div`
  margin-bottom: 1em;

  label {
    display: block;
    padding-bottom: 0.5em;
  }
`;
const Selects = styled.select`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cccccc;
`;
const Buttons = styled.button<{ background: string }>`
  display: block;
  width: 100%;
  border: ${({ background }) => (background ? "1px solid #cccccc" : "none")};
  outline: none;
  padding: 0.7em 1.5em;
  background: ${({ background }) => (background ? background : "teal")};
  color: ${({ background }) => (background ? "#333333" : "white")};
  border-radius: 4px;
  cursor: pointer;
`;
// const Container = styled.div``;
