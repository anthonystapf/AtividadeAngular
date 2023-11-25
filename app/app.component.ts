import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaDeFilmes';
  variavel: string = ''
  filmeFic  = [
    { nome: "Besouro Azul", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLXZb6z_VGWUc5O-s7iMJ8QVWQNa3b6hp6HawTsbW8dOJ1RQxh" , descricao:"Besouro Azul, baseado nos quadrinhos da DC, segue o jovem mexicano Jaime Reyes (Xolo Maridueña) que, recém-formado, volta para casa cheio de aspirações para o futuro. Em meio a uma busca por seu propósito no mundo - e um emprego - o destino o surpreende ao colocar em seu caminho uma antiga relíquia de biotecnologia alienígena, conhecida como Escaravelho..."},
    { nome: "Transformers: O Despertar das Feras", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe7gbfdfbLst_tO10arPFqmJfsizP9Eq3f4_IXBb58yQtqe1mP" , descricao:"Uma nova ameaça capaz de destruir todo o planeta surge fazendo com que Optimus Prime e os Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."},
    { nome: "John Carter - Entre Dois Mundos", imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSB9Hzv3PEMLCicY0t_25KpLyZEneCpKKx4YG3cwrkjwjqsrvSI", descricao:"Quando o veterano da Guerra Civil John Carter acorda misteriosamente na superfície de Marte, ele não tem ideia da aventura que o aguarda. Ele acaba se envolvendo em um conflito épico entre os habitantes do planeta e o destino de todos está em suas mãos." }
    
  ];
  filmeGuerra = [
    { nome: "Coração de Ferro", imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBQF5Km_9ULGL9-K3QWqF7hqbD9tpcOO7sg01YIkJSZTVukIJP" , descricao:"Durante o final da Segunda Guerra Mundial, o sargento Don Wardaddy lidera um grupo de apenas cinco soldados norte-americanos encarregado de aniquilar os nazistas. Em um tanque de guerra Sherman, os homens enfrentam uma missão mortal. Apesar da desvantagem numérica, falta de armas e um soldado inexperiente, Wardaddy e seus homens se movimentam em um ataque espetacular no coração da Alemanha nazista."},
    { nome: "Sniper Americano", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpmcZDh-9iGYB5WFkseHknJqUlYIoCSGN-9osofjfnf6M0Py2g" , descricao:"Chris Kyle é um atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a Guerra do Iraque, sua missão é proteger seus companheiros e seu dever faz dele um dos maiores atiradores da história norte-americana. Sua precisão salva inúmeras vidas, mas também o torna um alvo preferencial. Quando Kyle finalmente volta para casa, ele descobre que não tem como deixar a guerra para trás."},
    { nome: "Até o ultimo homem", imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRESuEpcY2i2YUKh0-PCc2l9sUsMQ_Z-4VT7H--idL1J_9ve6_8", descricao:"Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens." }
    
  ];
  filmeInfantil = [
    { nome: "Speed Racer", imagem:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/70442048c58e538c12dc771aa119201b45ec76b28a26ec617b0e4dee607e7609._RI_TTW_.jpg" , descricao:"Nascido em um família de pilotos de carros, Speed Racer é uma estrelas das corridas. Ao negar uma oferta lucrativa do empresário da Royalton Indústrias, Speed o deixa furioso e acaba descobrindo a corrupção dos patrocinadores em corridas. Para salvar os negócios da família, Speed participa do mesmo rally que matou seu irmão para desafiar um magnata corrupto."},
    { nome: "Zoom: Academia de Super-Heróis", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRJPBOzO0m0-x7hA4z2r83U5K_p41Ok96vd_9X4bYyKSMuZPH_", descricao:"A Terra corre perigo de ser destruída, então Jack, um super-herói fora de forma e desempregado, também conhecido como Capitão Zoom, é convocado. Mas ele precisa transformar um grupo de crianças desajustadas em heróis para que elas salvem o planeta." },
    { nome: "As Aventuras de Sharkboy e Lavagirl", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy45hnRbpQBWXCI4Gh7Xaef8ZDI82OIA2jHgk-aK8VDpTkGA9E", descricao:"Max é um solitário garoto de dez anos que se perde em seu próprio mundo de fantasia para escapar das confusões diárias. Quando ele descobre que os super-heróis de sua imaginação podem ser mais reais do que ele pensava, seu mundo se transforma completamente. Max parte em uma viagem interplanetária rumo ao planeta Baba, onde conhece Sharkboy e Lavagirl, jovens heróis que enfrentam uma perigosa ameaça: o Sr. Elétrico, que tem por objetivo acabar com os sonhos para sempre." }
    
  ];
}
