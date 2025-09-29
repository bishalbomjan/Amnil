import styles from "./styles.module.css";
const FormSelect = () => {
  return (
    <div>
      <h1>Comprehensive Form</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <form action="" className={styles.form}>
        <div>
          <h2>Personal Detail</h2>
          <div className={styles.formGroupContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                className={styles.inputField}
                type="text"
                id="firstName"
                placeholder="Enter yout first Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                className={styles.inputField}
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className={styles.formGroupContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.inputField}
                type="text"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                className={styles.inputField}
                type="text"
                id="phone"
                placeholder="Enter Number"
              />
            </div>
          </div>
          <div className={styles.formGroupContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                className={styles.inputField}
                type="password"
                id="password"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="Cpassword">Confirm Password</label>
              <input
                className={styles.inputField}
                type="text"
                id="Cpassword"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <div className={styles.formGroupContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="age">Age</label>
              <input className={styles.inputField} type="number" id="age" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dob">Birth Date</label>
              <input
                className={styles.inputField}
                type="date"
                id="dob"
                placeholder="Pick a date"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>Location & Languages</h2>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <select id="country" className={styles.inputField}>
              <option value="">Select your country</option>
              <option value="nepal">Nepal</option>
              <option value="usa">USA</option>
              <option value="japan">Japan</option>
              <option value="austrialia">Austrialia</option>
            </select>
          </div>
          <div>
            <label>Languages (Select all that apply)</label>
            
          </div>
        </div>
        <div>
          <h2>About You</h2>
          <div className={styles.formGroup}>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              className={`${styles.inputField} ${styles.textarea}`}
              placeholder="Tell us about yourself..."
              rows={6}
            ></textarea>
            <p>Gender</p>
            <div className={styles.radio}>
              <div className={styles.radioBtn}>
                <input type="radio" value="male" id="male" name="experience" />
                <label htmlFor="male">Male</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="female"
                  id="female"
                  name="experience"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="other"
                  id="other"
                  name="experience"
                />
                <label htmlFor="other">Other</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="not to say"
                  id="not to say"
                  name="experience"
                />
                <label className={styles.radioLabel} htmlFor="not to say">
                  Prefer not to say
                </label>
              </div>
            </div>
            <p>Experience Level</p>
            <div className={styles.radio}>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="beginer"
                  id="beginer"
                  name="experience"
                />
                <label htmlFor="beginer">Beginner</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="intermediate"
                  id="intermediate"
                  name="experience"
                />
                <label htmlFor="intermediate">Intermediate</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="advance"
                  id="advance"
                  name="experience"
                />
                <label htmlFor="advance">Advance</label>
              </div>
              <div className={styles.radioBtn}>
                <input
                  type="radio"
                  value="expert"
                  id="expert"
                  name="experience"
                />
                <label className={styles.radioLabel} htmlFor="expert">
                  Expert
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSelect;
