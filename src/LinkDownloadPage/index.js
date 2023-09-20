
import './linkdownload.scss'
import GameRandom from '../ListGamesPage/GamesRandom'

function LinkDownloadPage({links}) {
    const parts = links.title.split('"')[1].split('-')
    
    return (
        <div id='link-download-page' className='col-lg-12'>
            <GameRandom type={'Game PC'}/>
            <div className='col-lg-12 logo'>
                <div className='image'>
                    <img width='80%' src={links.logo} />
                </div>
            </div>
            <div className='col-lg-12 title'>
                <p>{links.title.split('"')[0]}</p>
                {links.password ? links.password != '' ? <p>Unzip Password : {links.password}</p> : <></> : <></>}
            </div>
            <div className='links col-12'>
                {links.links.map((link, index) => {
                    if(links.links.length == 1){
                        return <a key={index} href={link} target="_blank" className='link-item'>
                            <div>
                                {links.title.split('(')[0].split('"')[0]} - Main
                            </div>
                        </a>
                    } else {
                        return <a key={index} href={link} target="_blank" className='link-item'>
                            <div>
                                {links.title.split('(')[0].split('"')[0]} - Part {parts[index]}
                            </div>
                        </a>
                    }
                })}
            </div>
        </div>
    );
}

export default LinkDownloadPage;