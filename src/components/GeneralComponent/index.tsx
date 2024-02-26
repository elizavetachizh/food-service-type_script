import { ContentArea } from "../ContentArea";
import { Center } from "../Center";
import React, { PropsWithChildren } from "react";
import { ContentPageStyle } from "../ContentPage";
import BarMenu from "../BarMenu";

type GeneralComponentProps = {
  maxWidth: string;
};
export default function GeneralComponent({
  children,
  maxWidth,
}: PropsWithChildren<GeneralComponentProps>) {
  return (
    <div className="App">
      <BarMenu />
      <ContentArea>
        <Center maxWidth={maxWidth}>
          <ContentPageStyle>{children}</ContentPageStyle>
        </Center>
      </ContentArea>
    </div>
  );
}
