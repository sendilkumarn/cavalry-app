import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cavalry",
  description: "cavalry.tech",
};

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2">
        <Box 
          className="pt-24 pb-4 pr-24 pl-4 bg-[#FF6F61] rounded-lg shadow-lg" 
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <h1 className="text-4xl font-bold md:text-6xl sm:text-5xl text-white"> Cavalry </h1>
        </Box>
        
        <ul 
          className="list-inside text-lg font-[family-name:var(--font-geist-mono)]"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <li className="mb-2">
           Your IT outsourcing
            <code className="bg-white/[.06] px-1 py-0.5 rounded font-semibold" style={{"color": "#ff613f"}}>
              partner
            </code>
            .
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      <Box maxWidth="320px">
        <Card
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Flex gap="3" align="center">
            <Avatar
              size="1"
              src="/mail.svg"
              fallback="T"
            />
            <Box>
              <Text as="div" size="2" color="gray">
                Reach out to us
              </Text>
              <Text as="div" size="2" weight="bold" style={{"color": "#ff613f"}}>
                hello@cavalry.tech
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
      </footer>
    </div>
  );
}
