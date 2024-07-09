import { useCountryDetails } from "hooks";
import { Country } from "models";

import { Container, Flag, Text } from "./CountryCard.style";

interface Props {
  country: Country;
  onClick: () => void;
}

export function CountryCard({ country, onClick }: Props) {
  const {
    flags,
    name: { common: commonName },
    population,
    region,
  } = country;
  const { getProcessedCapitals } = useCountryDetails(country);

  const { capitalsTitle, processedCapitals } = getProcessedCapitals();

  return (
    <Container.Main onClick={onClick}>
      <Flag alt={commonName.toLowerCase()} src={flags["svg"]} />
      <Container.Details.Outer>
        <Text.Title>{commonName}</Text.Title>
        <Container.Details.Inner>
          <Text.Wrapper>
            Population:
            <Text.Normal>
              &nbsp;{population.toLocaleString("en-US")}
            </Text.Normal>
          </Text.Wrapper>
          <Text.Wrapper>
            Region:
            <Text.Normal>&nbsp;{region}</Text.Normal>
          </Text.Wrapper>
          {capitalsTitle && (
            <Text.Wrapper>
              {capitalsTitle}
              <Text.Normal>
                &nbsp;
                {processedCapitals}
              </Text.Normal>
            </Text.Wrapper>
          )}
        </Container.Details.Inner>
      </Container.Details.Outer>
    </Container.Main>
  );
}
