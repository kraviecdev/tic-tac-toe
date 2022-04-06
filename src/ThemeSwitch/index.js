import { Wrapper, Button, Info, SwitchBody, IconBody, Icon } from "./styled";

export const ThemeSwitch = ({ onClick, status, active }) => {

  return (
    <Wrapper>
      <Button
        onClick={onClick}
      >
        <Info>
          Dark mode {status}
        </Info>
        <SwitchBody>
          <IconBody
            active={active}
          >
            <Icon />
          </IconBody>
        </SwitchBody>
      </Button>
    </Wrapper>
  );
};