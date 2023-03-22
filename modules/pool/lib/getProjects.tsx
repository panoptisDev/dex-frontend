import {
  Box,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';

export function getProjects() {
  const projects = [
    { id: '0x248d943b9d59c4be35d41b34f79370dfbf577b2b000200000000000000000002', name: 'Ames.Defi', description: () => {
      return <Box>
        <Text mb="2"><Link href="https://www.ames-defi.app/">Ames.Defi</Link> is BUSD pegged seigniorage stablecoin ecosystem running on the Binance Smart Chain.</Text>
        <Text mb="2">The protocol's underlying mechanisms are designed in a way to ensure a peg of AMES:BUSD is achieved, and once achieved, it is maintained to establish $Ames as a mirrored, liquid asset to $BUSD. Protocol accomplishes this by introducing unique economic and game-theory centric dynamics into the market through its three tokens. Ames.defi is a Unite Finance fork which is itself inspired by Tomb Finance.</Text>
        <Text mb="2">The peg token for Ames.Defi is AMES and the share token is ASHARE.</Text>
        <Text my="4">AMES: 0xb9E05B4C168B56F73940980aE6EF366354357009</Text>
        <Text my="4">ASHARE: 0xFa4b16b0f63F5A6D0651592620D585D308F749A4</Text>
        <Text>dApp: <Link href="https://www.ames-defi.app/">https://www.ames-defi.app/</Link></Text>
        <Text>Whitepaper: <Link href="https://aalto-defi.notion.site/Ames-defi-Docs-7b7320e304c3475786487c60ca31d4d9">https://www.notion.so/Ames-defi-Docs-7b7320e304c3475786487c60ca31d4d9</Link></Text>
        <Text>Discord: <Link href="https://discord.gg/ames-aalto">https://discord.gg/ames-aalto</Link></Text>
        <Text>Twitter: <Link href="https://twitter.com/Aalto_Protocol">https://twitter.com/Aalto_Protocol</Link></Text>
        <Text>GitHub: <Link href="https://github.com/ames-defi/">https://github.com/ames-defi/</Link></Text>
      </Box>
    } },
    { id: '0xcf61cf9654f5536b8d6c93f09a0308ff3c2650f9000200000000000000000015', name: 'Aalto Protocol', description: () => {
      return <Box>
        <Text mb="2">Aalto Protocol is a decentralized capital gains system on the Binance Smart Chain that rewards users for holding the token, with the added functionality of earning yield on top of yield. Aalto Protocol aims to expand it's utility with a GameFi layer, serving as the main interaction token for a collection of games under the umbrella of Aalto Casino & Aalto Arcadium.</Text>
        <Text mb="2">The rewards consist of a sustainable fixed compound interest model combined with an auto-rebase mechanism that pays out directly to holders wallets. Additionally, investors can earn stablecoin and non-native token yields by staking their $AALTO in the Deep Blue Bank.</Text>
        <Text mb="2">The auto-rebase mechanism gives the $AALTO token automatic rebasing and compounding features, and a high Fixed and Sustainable APY of **402,252.1%**. Aalto Protocol is the sister project of <Link href="https://www.ames-defi.app/">Ames.Defi</Link> on the Binance Smart Chain.</Text>
        <Text my="4">AALTO: 0xcE18FbBAd490D4Ff9a9475235CFC519513Cfb19a</Text>
        <Text my="4">wAALTO: 0x12b70d84DAb272Dc5A24F49bDbF6A4C4605f15da</Text>
        <Text>Website: <Link href="https://aalto-protocol.com/">https://aalto-protocol.com/</Link></Text>
        <Text>Discord: <Link href="https://discord.gg/ames-aalto">https://discord.gg/ames-aalto</Link></Text>
        <Text>Medium: <Link href="https://medium.com/@Aalto_Protocol">https://medium.com/@Aalto_Protocol</Link></Text>
        <Text>Twitter: <Link href="https://twitter.com/Aalto_Protocol">https://twitter.com/Aalto_Protocol</Link></Text>
        <Text>Telegram: <Link href="https://t.me/aalto_protocol">https://t.me/aalto_protocol</Link></Text>
        <Text>Telegram Announcements: <Link href="https://t.me/aalto_protocol_announcements">https://t.me/aalto_protocol_announcements</Link></Text>
      </Box>
    } },
    { id: '0x8e15953eba7d5f8f99853d8f3cb64fc73b3ba770000200000000000000000003', name: 'Roaring Lion', description: () => {
      return <Box>
        <Text mb="2">More information about this project is coming soon.</Text>
      </Box>
    } },
    { id: '0x32934c1122c0d7b0fc3daab588a4490b53c1568c00020000000000000000000e', name: 'Serenity Capital', description: () => {
      return <Box>
        <Text mb="2">More information about this project is coming soon.</Text>
      </Box>
    } },
    { id: '0x3700d8fadab83c14371d3f58d122d0c7f832e63f00020000000000000000000b', name: 'Defender Finance', description: () => {
      return <Box>
        <Text mb="2">Champion finance is part of the ecosystem built by a trustworthy, reliable and hardworking team.</Text>
        <Heading size="md">Sister Protocols</Heading>
        <Text>Yield Farming: <Link href="https://championfinance.io/">Champion Finance</Link></Text>
        <Text>Yield Optimizer: Peanut Finance</Text>
        <Text mb="2">Decentralized Exchange: <Link href="https://www.vertek.exchange/">Vertek</Link></Text>
        <Text mb="2">Defender Finance Algo-stable yield farming is a multi-chain protocol and consists of the following tokens:</Text>
        <Text>Sword ($SWD): main (peg) token</Text>
        <Text mb="2">Shield ($SHD): share token</Text>
        <Heading size="sm" mb="2">Defender Finance is all about Ethereum!</Heading>
        <Text mb="2">Defender will launch on multi-chain and all the peg tokens in all chains will be pegged to 1 $ETH.</Text>
        <Text mb="2">Ethereum is the biggest Layer 1 blockchain and Ethereum's Team has been keeping building their amazing works to build up Ethereum's usecases and values in the long term.</Text>
        <Text mb="2">Defender Finance will be one of the usescases in Ethereum ecosystem. This protocol is aimed to bring a high-yield farming and sustainable growth in the long run with low investor effort demand.</Text>
        <Text my="4">SWDB: 0xc91324601B20ea0e238B63c9fAfca18d32600722</Text>
        <Text my="4">SHDB: 0x9562Ca0C2b05D089063F562fC3Ecc95e4424AD02</Text>
        <Text my="4">CHAM: 0xC95cD75dCea473a30C8470B232b36ee72aE5DcC2</Text>
        <Text>Website: <Link href="https://defenderfinance.io/">https://defenderfinance.io/</Link></Text>
        <Text>dApp: <Link href="https://app.defenderfinance.io/">https://app.defenderfinance.io/</Link></Text>
        <Text>Whitepaper: <Link href="https://docs.defenderfinance.io/">https://docs.defenderfinance.io/</Link></Text>
        <Text>Twitter: <Link href="https://twitter.com/defender_fi">https://twitter.com/defender_fi</Link></Text>
        <Text>Medium: <Link href="https://medium.com/@defenderfinance.io">https://medium.com/@defenderfinance.io</Link></Text>
        <Text>Discord: <Link href="https://discord.gg/rf7VWXYQrr">https://discord.gg/rf7VWXYQrr</Link></Text>
        <Text>Telegram: <Link href="https://t.me/defender_announcement">https://t.me/defender_announcement</Link></Text>
      </Box>
    } },
    { id: '0xa237bd3b190f12661ed838033b7228e7dc9c78d8000100000000000000000014', name: 'Magik Finance', description: () => {
      return <Box>
        <Text mb="2">Magik is a community led blockchain gaming protocol on the Fantom network.</Text>
        <Text mb="2">In the 10 months since its founding by UK-based brothers Jimmy and Avery, a group of about a dozen game, smart contract and business developers have come together to build a better model for on-chain gaming.</Text>
        <Text mb="2">Our goal is to build an inclusive decentralized gaming “world” where user participation drives the direction of development and culture.</Text>
        <Text mb="2">We're using Fantom rails to facilitate near-instant in-game transaction settlement for arena matches, self-custodied user inventories and "Faction" armories.</Text>
        <Text mb="2">We're designing a new v2 tokenomic model and smart contract system — replacing token inflation with platform fees as the driver of in-game incentives' and healthy ecosystem participation.</Text>
        <Text mb="2">We're focused on providing the maximum value to users, and building the most kickass gaming community on the blockchain — or anywhere else.</Text>
        <Text mb="2">We had a pretty unusual route to "finding ourselves" as a protocol. Last March, we launched a yield optimizer platform called Magik.Farm, intent on generating fees to keep the lights on while the market tanked.</Text>
        <Text mb="2">Our lead game developer Kyle started off as a community member. So did our operations manager Brett. In fact, every member of the Magik team has come from its community (myself included). We've spent close to $0 on marketing or advertising. We've never raised funds/vc or dumped tokens for project runway. We've been a net accumulator of MAGIK.</Text>
        <Text mb="2">We've structured an early go-to market approach with Magik Arena (beta) that's focused around on-boarding users from BSC and AVAX via multi-chain Faction NFT mints.</Text>
        <Text mb="2">Our role at Magik.Farm as a service provider allowed us to build deep relationships with numerous protocols on other chains. They're pitching in to promote and facilitate an nft game starter pack that will get its users a bit of MAGIK and FTM gas. We want to make it easy for anyone to jump in and play.</Text>
        <Text mb="2">We're looking to build multi-layered and meaningful in-game economies within a UX that just works. We want users to ultimately drive and be the beneficiaries of those economies. Our focus is primarily on game development, but long term we see potential for Magik World as a space for social hangouts, subscription based communities and 3rd party vendor storefronts for in-game and out of game assets.</Text>
        <Text mb="2">There's a vast world waiting to be built. We hope you'll help us cultivate the land.</Text>
        <Text my="4">MAGIK: 0xD68F75b3aa54bee23e6Ac3AD4b3C28D3E6319725</Text>
        <Text my="4">MIGHT: 0x9be0C5b42FB3540675A8d3E6b540f06734dFFbA6</Text>
        <Text my="4">MSHARE: 0xc8ca9026ad0882133ef126824f6852567c571a4e</Text>
        <Text>dApp: <Link href="https://magik.finance/">https://magik.finance/</Link></Text>
        <Text>Whitepaper: <Link href="https://magikdotfinance.gitbook.io/magik-v2-ecosystem-whitepaper-draft/">https://magikdotfinance.gitbook.io/magik-v2-ecosystem-whitepaper-draft/</Link></Text>
        <Text>Twitter: <Link href="https://twitter.com/magikthedog">https://twitter.com/magikthedog</Link></Text>
        <Text>Discord: <Link href="https://discord.com/invite/sm3szPSkzE">https://discord.com/invite/sm3szPSkzE</Link></Text>
        <Text>Telegram: <Link href="https://t.me/MAGIK_Finance">https://t.me/MAGIK_Finance</Link></Text>
      </Box>
    } },
    { id: '0x64bf08fac067b25c77967affafce73760d8d0bdf000200000000000000000011', name: 'UP Finance', description: () => {
      return <Box>
        <Text mb="2">$UP is a perpetually appreciating 100% backed by BUSD asset that makes up the backbone of the UP Finance ecosystem.</Text>
        <Text mb="2">The value of UP will never decrease and will always be redeemable for the price on the contract. In fact any contract mint and redeem only further increase the price due to the contract design mechanics. Imagine having a token as a DeFi currency to transact in, backed by one of the best stable coins within DeFi, worth more tomorrow than today and can never crash in price.</Text>
        <Text mb="2">Join in on the $UP movement and take part in the new model primed to replace holding static stable coins. There is only one way to go and that is Always and Only $UP.</Text>
        <Text my="4">UP Token: 0x5376A83112100Ff1567b2782e0d99c6d949b5509</Text>
        <Text>dApp: <Link href="https://nft.upfinance.io/">https://nft.upfinance.io/</Link></Text>
        <Text>Whitepaper: <Link href="https://docs.upfinance.io/">https://docs.upfinance.io/</Link></Text>
        <Text>Twitter: <Link href="https://twitter.com/_UpFinance">https://twitter.com/_UpFinance</Link></Text>
        <Text>Discord: <Link href="https://discord.gg/hgtCuA2kMt">https://discord.gg/hgtCuA2kMt</Link></Text>
      </Box>
    } },
  ];

  return projects;
}