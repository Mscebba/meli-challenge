import classes from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={classes.spinner_box}>
      <div className={classes.spinner_outer}>
        <div className={classes.spinner_inner}></div>
      </div>
    </div>
  );
}
