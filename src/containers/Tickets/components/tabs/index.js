import './tabs.css';

const Tabs = ({getValueFromToolBar}) => {
    const tabsName = ['Самый Дешевый', 'Самый Быстрый', 'Оптимальный'];

    return (
        <div className='tab__container'>
            {tabsName.map((item,i) => <button key={i} id={i} onClick={(event) => getValueFromToolBar(event)} className="btn">{item}</button>)} 
        </div>
    )
}

export default Tabs;