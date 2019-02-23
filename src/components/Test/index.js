/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Button, Search } from '../../theme';

const Test = () => (
  <Fragment>
    <Container>
      <h1 className="font-custom1">เนื้อหาจำลองแบบเรียบๆ (custom font 54px)</h1>
      <h1>{'ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ <h1>'}</h1>
      <p className="lead">Make a paragraph stand out by adding class “lead”</p>
      <h2>{'ทำไมจึงต้องนำมาใช้? <h2>'}</h2>
      <h3>{'จะนำมาใช้ได้จากที่ไหน? <h3>'}</h3>
      <h4>{'ไม่มีผู้ใดที่สมัครรักใคร่ในความเจ็บปวด <h4>'}</h4>
      <p>{'มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น Layout เรานำ Lorem Ipsum มาใช้เพราะความที่มันมีการกระจายของตัวอักษรธรรมดาๆ แบบพอประมาณ <Body text>'}</p>
      <p>{'ตัวสร้าง Lorem Ipsum บนอินเทอร์เน็ตทุกตัวมักจะเอาท่อนที่แน่ใจแล้วมาใช้ซ้ำๆ ทำให้กลายเป็นที่มาของตัวสร้างที่แท้จริงบนอินเทอร์เน็ต ในการสร้าง Lorem Ipsum ที่ดูเข้าท่า ต้องใช้คำจากพจนานุกรมภาษาละตินถึงกว่า 200 คำ <Body text>'}</p>
      <ul>
        <li>ไม่มีมุกตลกซุกแฝงไว้ภายใน หรือไม่มีคำใดๆ ที่ไม่บ่งบอกความหมาย</li>
        <li>หรือเสาะแสวงหาและปรารถนาจะครอบครองความเจ็บปวด</li>
        <li>นั่นก็เป็นเพราะว่ามันเจ็บปวด..</li>
        <li>บ้างก็เป็นความบังเอิญ บ้างก็เป็นความตั้งใจ</li>
      </ul>
      <Button>Normal</Button>
      <Button outline>Normal</Button>
      <Button contrast>Normal</Button>
      <Button contrast outline>Normal</Button>
      <Search id="search-box" />
      <form>
        <input placeholder="Name" />
      </form>
    </Container>
  </Fragment>
);

export default Test;
