import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => { 
    return (
      <section className="statistics">
        {title ? <h2 className="title">{title}</h2> : null}

        <ul className={css.statlist}>
          {stats.map(data => (
            <li key={data.id} className={css.item}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
