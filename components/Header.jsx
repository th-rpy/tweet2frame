import {
  Text,
  Input,
  Box,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import Typewriter from "./Typewriter";

const Header = ({ bringTweet }) => {
  const title_size = { base: "33px", md: "50px", lg: "55px" };
  const font_size = { base: "16px", md: "18px", lg: "20px" };

  return (
    <div>
      <Box pt="20" px="4">
        <Text fontSize={title_size} className="title i">
          Get Your tweets in a amazing frame{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              loop
              cursor
              typespeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["JPG", "PNG", "JPEG", "SVG!"]}
            />
          </span>
        </Text>
      </Box>
      <Box className="i" my="12" align="center">
        <form onSubmit={bringTweet} autoComplete="on">
          <InputGroup maxW="70vw">
		  	<Select placeholder="Select option" maxW = "15vw">
				<option value="option1">Twitter</option>
				<option value="option2">Facebook</option>
				<option value="option2">Instagram</option>
			</Select>
            <Input
              name="tweetURL"
              placeholder="https://twitter.com/fbOpenSource/status/1369334666843488256"
            />
            <InputRightElement>
              <button type="submit">
                <Search2Icon fontSize={font_size} color="blue.700" />
              </button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </div>
  );
};

export default Header;
