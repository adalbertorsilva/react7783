import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
    constructor() {
        super()
        this.state = {
            novoTweet: '',
            tweets: ['Alo alo w brazil', 'Alo alo w brazil', 'Alo alo w brazil']
        }
        console.log('Constructor')
        // this.adicionarTweet = this.adicionarTweet.bind(this)
    }

    adicionarTweet = (event) => {
        // Previne o carregamento
        event.preventDefault()
        // Adicionar na tela: O conteudo do tweet no formato de um <Tweet />
        console.log(this)
        
    }

  render() {
    console.log('render')
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={this.adicionarTweet}>
                        <div className="novoTweet__editorArea">
                            <span
                                className={`
                                    novoTweet__status 
                                    ${this.state.novoTweet.length > 140
                                        ? 'novoTweet__status--invalido'
                                        : ''
                                    }
                                    `}>
                                {this.state.novoTweet.length}/140
                            </span>
                            
                            <textarea
                                    className="novoTweet__editor"
                                    onChange={ (evento) => { this.setState({ novoTweet: evento.target.value }) } }
                                    value={this.state.novoTweet}
                                    placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" disabled={this.state.novoTweet.length > 140} className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        {
                            this.state.tweets.map(() => <Tweet texto="Bagulhos"/>) 
                        }
                        
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
