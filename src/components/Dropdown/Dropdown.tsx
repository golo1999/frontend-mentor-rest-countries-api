import { MutableRefObject, createRef, useCallback, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useOutsideClick } from "hooks";

import { Container, List, Text } from "./Dropdown.style";

interface Props {
  items: string[];
  selectedItem: string;
  onItemSelected: (item: string) => void;
}

export function Dropdown({ items, selectedItem, onItemSelected }: Props) {
  const mainContainerRef = createRef<HTMLDivElement>();
  const [isExpanded, setIsExpanded] = useState(false);

  const closeDropdown = useCallback(
    () => isExpanded && setIsExpanded(false),
    [isExpanded]
  );

  useOutsideClick(
    mainContainerRef as MutableRefObject<HTMLElement>,
    closeDropdown
  );

  const handleItemClick = useCallback(
    (item: string) => {
      closeDropdown();
      onItemSelected(item);
    },
    [closeDropdown, onItemSelected]
  );

  const toggleIsExpanded = useCallback(
    () => setIsExpanded((value) => !value),
    []
  );

  const displayedIcon = isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
    <Container.Main ref={mainContainerRef}>
      <Container.Top onClick={toggleIsExpanded}>
        <Text.SelectedItem>{selectedItem}</Text.SelectedItem>
        {displayedIcon}
      </Container.Top>
      {isExpanded && (
        <List>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </List>
      )}
    </Container.Main>
  );
}
