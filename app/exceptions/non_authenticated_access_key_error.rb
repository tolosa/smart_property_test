class NonAuthenticatedAccessKeyError < ApplicationError
  def errors
    { base: I18n.t("errors.access_key_athentication.invalid") }
  end
end
