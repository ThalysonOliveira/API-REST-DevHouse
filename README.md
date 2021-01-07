
<h1 align="center">Dev House</h1>

<p align="center">
  <a href="#tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pre-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<a id="tecnologia"></a>
## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/ )

<a id="pre-requisitos"></a>
## :fire: **Pré-requisitos**

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)


<a id="como-usar"></a>
## :zap: Como usar

- Faça um clone desse repositório: `git clone https://github.com/ThalysonOliveira/DevHouse-API.git`
- Instale as dependências: `yarn`
- Inicie seu banco MongoDB
- Inicie a aplicação:
   - Rode o comando de inicialização: `yarn dev` 

<a id="funcionalidades"></a>
## 🛠️ Funcionalidades

Dev house, API desenvolvida para gerenciamenntos de casas
- Criação de Usuários
- Listar, criar, editar e deletar Casas
- Visualização das disponilidades das cassas de todos os usuários
- Listar, criar e editar reservas de casas

<a id="rotas"></a>
### ↪︎ Rotas
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Dev%20House&uri=%7B%22_type%22%3A%22export%22%2C%22__export_format%22%3A4%2C%22__export_date%22%3A%222020-12-22T16%3A54%3A36.097Z%22%2C%22__export_source%22%3A%22insomnia.desktop.app%3Av2020.4.0%22%2C%22resources%22%3A%5B%7B%22_id%22%3A%22req_70d5ae9865674fe3abf0ced1cfa8348d%22%2C%22parentId%22%3A%22fld_82ad9d31ee1a467fa84ba8570b863405%22%2C%22modified%22%3A1601144125805%2C%22created%22%3A1601142614794%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fhouses%2F5f6f81e1d06fe013c4726790%2Freserve%22%2C%22name%22%3A%22Reserve%20House%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22date%5C%22%3A%20%5C%2225%20de%20novembro%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6f81aed06fe013c472678f%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_903153ca2dfb4a0c93c485367e03ea1d%22%7D%2C%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_7e835bfbe41546378484cecf353349d3%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1601142614851%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_82ad9d31ee1a467fa84ba8570b863405%22%2C%22parentId%22%3A%22fld_0d01d5d78aae48d19e1ab3518a812a8c%22%2C%22modified%22%3A1601142599401%2C%22created%22%3A1601142599401%2C%22name%22%3A%22Reserve%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1601142599401%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22fld_0d01d5d78aae48d19e1ab3518a812a8c%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1600800800895%2C%22created%22%3A1600800800895%2C%22name%22%3A%22Devhouse%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1600800800895%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22parentId%22%3Anull%2C%22modified%22%3A1600458951062%2C%22created%22%3A1600458951062%2C%22name%22%3A%22Insomnia%22%2C%22description%22%3A%22%22%2C%22scope%22%3Anull%2C%22_type%22%3A%22workspace%22%7D%2C%7B%22_id%22%3A%22req_d640b76148a14453bd052970ed893759%22%2C%22parentId%22%3A%22fld_82ad9d31ee1a467fa84ba8570b863405%22%2C%22modified%22%3A1601145208908%2C%22created%22%3A1601144929972%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Freserve%22%2C%22name%22%3A%22Reserve%20List%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6f81aed06fe013c472678f%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_903153ca2dfb4a0c93c485367e03ea1d%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1601141918804%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_bdc45ca59e5540eba3f61bda2e3b4bcd%22%2C%22parentId%22%3A%22fld_82ad9d31ee1a467fa84ba8570b863405%22%2C%22modified%22%3A1601145308568%2C%22created%22%3A1601145199043%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Freserve%2Fcancel%22%2C%22name%22%3A%22Reserve%20Cancel%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22DELETE%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22reserve_id%5C%22%20%3A%20%5C%225f6f8253bf09181060492cd1%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_d999581f0f524fd6af0dcdaaa90491e3%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1601141570780.5%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_96cf10e4f024409fa9b61bad87a4b3ce%22%2C%22parentId%22%3A%22fld_08f1ab3aa8064874bcd8dd4d76c74df3%22%2C%22modified%22%3A1601142745832%2C%22created%22%3A1601141222757%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fdashboard%22%2C%22name%22%3A%22Show%20Houses%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6aa90b79197b1764a41f3f%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_ff1266923b0945f994c3849eebc75aca%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1601141222757%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_08f1ab3aa8064874bcd8dd4d76c74df3%22%2C%22parentId%22%3A%22fld_0d01d5d78aae48d19e1ab3518a812a8c%22%2C%22modified%22%3A1601141204335%2C%22created%22%3A1601141204335%2C%22name%22%3A%22Dashboard%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1601141204335%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22req_15d9d1e904534457a519b9ff8dfcd60f%22%2C%22parentId%22%3A%22fld_4543d956713f48e4950b7d425622561d%22%2C%22modified%22%3A1601401550591%2C%22created%22%3A1600803727668%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fhouses%22%2C%22name%22%3A%22Houses%20Store%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22multipart%2Fform-data%22%2C%22params%22%3A%5B%7B%22name%22%3A%22thumbnail%22%2C%22value%22%3A%22%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_efd39266fa4340adac0445a346a457c3%22%2C%22type%22%3A%22file%22%2C%22fileName%22%3A%22D%3A%5C%5CImagens%5C%5Cimages.jpg%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22description%22%2C%22value%22%3A%22casa%20nova%20bem%20grande%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_a068399f7e2d4d3a815684c2dc9ca2c0%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22price%22%2C%22value%22%3A%222500%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_60d09fe1a96b4b529330ef5061b82c60%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22location%22%2C%22value%22%3A%22rua%200800%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_2f436f9162f34e79a4505a6969e75918%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22status%22%2C%22value%22%3A%22true%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_c8eaeb643a534a6fa01d00eba49d35a1%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_f45ca028a382404db1d9a6441d62c90d%22%7D%5D%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22multipart%2Fform-data%22%2C%22id%22%3A%22pair_0f83676b0eba491881149f56e1631875%22%7D%2C%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6f81aed06fe013c472678f%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_ca36ef09085c4fff805be0902d289f1b%22%2C%22disabled%22%3Afalse%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1600803727668%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_4543d956713f48e4950b7d425622561d%22%2C%22parentId%22%3A%22fld_0d01d5d78aae48d19e1ab3518a812a8c%22%2C%22modified%22%3A1600803717884%2C%22created%22%3A1600803717884%2C%22name%22%3A%22Houses%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1600803717885%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22req_e2ded62e5dd742d89fbbc1f861572a16%22%2C%22parentId%22%3A%22fld_4543d956713f48e4950b7d425622561d%22%2C%22modified%22%3A1601401299419%2C%22created%22%3A1600819681755%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fhouses%2F5f6a8ba3ab868f13b4fbcfe6%22%2C%22name%22%3A%22Houses%20Update%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22PUT%22%2C%22body%22%3A%7B%22mimeType%22%3A%22multipart%2Fform-data%22%2C%22params%22%3A%5B%7B%22name%22%3A%22thumbnail%22%2C%22value%22%3A%22%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_efd39266fa4340adac0445a346a457c3%22%2C%22type%22%3A%22file%22%2C%22fileName%22%3A%22D%3A%5C%5CImagens%5C%5Cminhafoto.jpg%22%7D%2C%7B%22name%22%3A%22description%22%2C%22value%22%3A%22Apartamento%20com%20piscina%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_a068399f7e2d4d3a815684c2dc9ca2c0%22%7D%2C%7B%22name%22%3A%22price%22%2C%22value%22%3A%221350%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_60d09fe1a96b4b529330ef5061b82c60%22%7D%2C%7B%22name%22%3A%22location%22%2C%22value%22%3A%22Avenida%20da%20esquina%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_2f436f9162f34e79a4505a6969e75918%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22status%22%2C%22value%22%3A%22true%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_c8eaeb643a534a6fa01d00eba49d35a1%22%7D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_f45ca028a382404db1d9a6441d62c90d%22%7D%5D%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22multipart%2Fform-data%22%2C%22id%22%3A%22pair_0f83676b0eba491881149f56e1631875%22%7D%2C%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6a5680a6494c1214be21cc%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_ca36ef09085c4fff805be0902d289f1b%22%2C%22disabled%22%3Afalse%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1600803009584%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_eb566fc4455040c3902921b7336236c5%22%2C%22parentId%22%3A%22fld_4543d956713f48e4950b7d425622561d%22%2C%22modified%22%3A1601409911307%2C%22created%22%3A1600818640089%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fhouses%22%2C%22name%22%3A%22Index%20Houses%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%22mimeType%22%3A%22multipart%2Fform-data%22%2C%22params%22%3A%5B%5D%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22status%22%2C%22value%22%3A%22false%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_90f1ea829549410eac8a60a6f1079358%22%7D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_89fe8baf75d746cb8196d43403cc5f59%22%7D%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22user_id%22%2C%22value%22%3A%225f6aa90b79197b1764a41f3%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_ca36ef09085c4fff805be0902d289f1b%22%2C%22disabled%22%3Afalse%7D%2C%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22multipart%2Fform-data%22%2C%22id%22%3A%22pair_c9865161a66b49c6a5f2f3597cb6a5d7%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1600802291500%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_30fc1e3eafef40c0812261c438784c86%22%2C%22parentId%22%3A%22fld_4543d956713f48e4950b7d425622561d%22%2C%22modified%22%3A1600996170196%2C%22created%22%3A1600821146890%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fhouses%22%2C%22name%22%3A%22Index%20Destroy%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22DELETE%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22house_id%5C%22%20%3A%20%5C%225f6aa9b53f841d06889c0765%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22c%22%2C%22value%22%3A%225f6a5680a6494c1214be21cc%22%2C%22description%22%3A%22%22%2C%22id%22%3A%22pair_6dea9233d1c143f284241c909d53aae1%22%7D%2C%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_033eb4cb2a9643729b2f839d1424225a%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1600801573416%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_dea5f3ebdae747bda1e61862b4c9a646%22%2C%22parentId%22%3A%22fld_06173541089449f49dfc35810db96ca9%22%2C%22modified%22%3A1607980552860%2C%22created%22%3A1600800855332%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fsessions%22%2C%22name%22%3A%22Session%20Store%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22email%5C%22%3A%20%5C%22daniel%40gmail.com%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_bd5ba9c09b3745c9bfe6c6ad94a1c6d0%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1600800855332%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_06173541089449f49dfc35810db96ca9%22%2C%22parentId%22%3A%22fld_0d01d5d78aae48d19e1ab3518a812a8c%22%2C%22modified%22%3A1600800845356%2C%22created%22%3A1600800845356%2C%22name%22%3A%22Session%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1600800845356%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22env_156552dd7647507ff33f4f8eefe3b4a13ccdb7f9%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1603160410240%2C%22created%22%3A1600458951107%2C%22name%22%3A%22Base%20Environment%22%2C%22data%22%3A%7B%22base_url%22%3A%22http%3A%2F%2Flocalhost%3A3333%22%7D%2C%22dataPropertyOrder%22%3A%7B%22%26%22%3A%5B%22base_url%22%5D%7D%2C%22color%22%3Anull%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1600458951107%2C%22_type%22%3A%22environment%22%7D%2C%7B%22_id%22%3A%22jar_156552dd7647507ff33f4f8eefe3b4a13ccdb7f9%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1600458951109%2C%22created%22%3A1600458951109%2C%22name%22%3A%22Default%20Jar%22%2C%22cookies%22%3A%5B%5D%2C%22_type%22%3A%22cookie_jar%22%7D%2C%7B%22_id%22%3A%22spc_e34a9ae4052c470790536969b0ab1e9b%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1600458951064%2C%22created%22%3A1600458951064%2C%22fileName%22%3A%22Insomnia%22%2C%22contents%22%3A%22%22%2C%22contentType%22%3A%22yaml%22%2C%22_type%22%3A%22api_spec%22%7D%5D%7D)
