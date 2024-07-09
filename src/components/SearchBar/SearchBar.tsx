import { Container, Icon, Input } from "./SearchBar.style";

interface Props {
  placeholder?: string;
  text: string;
  onEndIconClick: () => void;
  onTextChange: (text: string) => void;
}

export function SearchBar({
  placeholder,
  text,
  onEndIconClick,
  onTextChange,
}: Props) {
  const isEndIconHidden = text.length === 0;

  return (
    <Container.Main>
      <Icon.Start />
      <Input
        placeholder={placeholder}
        spellCheck={false}
        value={text}
        onChange={({ target: { value } }) => onTextChange(value)}
      />
      <Icon.End $isHidden={isEndIconHidden} onClick={onEndIconClick} />
    </Container.Main>
  );
}
