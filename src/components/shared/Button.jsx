import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>{children}</button>
  )
}

Button.defaultProps = {
    version: "primary",
    type: "submit", 
    isDisabled: false,
}

Button.prototypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;