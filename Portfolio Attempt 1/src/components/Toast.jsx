import { useState, useEffect, useCallback } from 'react'

function Toast({ message, isSuccess, visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onHide()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [visible, onHide])

  const iconClass = isSuccess
    ? 'fa-solid fa-circle-check'
    : 'fa-solid fa-circle-xmark'

  const toastClass = `toast${visible ? ' show' : ''}${
    isSuccess ? ' success' : ' error'
  }`

  return (
    <div id="toast" className={toastClass}>
      <div className="toast-content">
        <i id="toast-icon" className={iconClass}></i>
        <span id="toast-message">{message}</span>
      </div>
      <div className="toast-progress"></div>
    </div>
  )
}

// Custom hook for toast state management
export function useToast() {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    isSuccess: true,
  })

  const showToast = useCallback((message, isSuccess) => {
    setToast({ visible: true, message, isSuccess })
  }, [])

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }))
  }, [])

  return { toast, showToast, hideToast }
}

export default Toast
